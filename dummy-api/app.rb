require 'sinatra'
require 'json'

lists = [
	{ id: 1, name: 'My reading list', record_ids: [ 1, 2, 3 ] },
	{ id: 2, name: 'Recommended', record_ids: [ 4, 5 ] }
]
books = [
	{ id: 1, title: 'Le avventure di Pinocchio', author_ids: [ 1 ], read_on: nil, list_ids: [ 1 ] },
	{ id: 2, title: 'The Name of the Wind', author_ids: [ 2 ], read_on: Date.today, list_ids: [ 1, 2 ] },
	{ id: 3, title: "The Wise Man's Fear", author_ids: [ 2 ], read_on: nil, list_ids: [ 1, 2 ] }
]
authors = [
	{ id: 1, name: 'Carlo Collodi' },
	{ id: 2, name: 'Patrick Rothfuss' }
]
records = [
	{ id: 1, book_id: 1, list_id: 1, position: 2 },
	{ id: 2, book_id: 2, list_id: 1, position: 1 },
	{ id: 3, book_id: 3, list_id: 1, position: 3 },
	{ id: 4, book_id: 2, list_id: 2, position: 1 },
	{ id: 5, book_id: 3, list_id: 2, position: 2 }
]

get '/api/v0/lists' do
	content_type :json
	{
		lists: lists,
		records: records,
		books: books,
		authors: authors
	}.to_json
end

get '/api/v0/lists/:id' do
	@list_id = params['id'].to_i
	content_type :json
	{
		list: find_list(lists, @list_id),
		records: records_for(records, @list_id),
		books: books,
		authors: authors
	}.to_json
end

put '/api/v0/records/:id' do
	content_type :json
	json_params = JSON.parse(request.body.read)
	@record = find_record(records, params['id'].to_i)
	@record[:position] = json_params['record']['position'].to_i
	{ record: @record }.to_json
end

def find_record(records, id)
	records.select { |record| record[:id] == id }.first
end

def find_list(lists, id)
	lists.select { |list| list[:id] == id }.first
end

def records_for(records, list_id)
	records.select do |record|
		record[:list_id] == list_id
	end
end

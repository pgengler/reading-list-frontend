require 'sinatra'
require 'json'

lists = [
	{ id: 1, name: 'My reading list', book_ids: [ 1, 2 ] }
]
books = [
	{ id: 1, position: 2, title: 'Le avventure di Pinocchio', author_ids: [ 1 ] },
	{ id: 2, position: 1, title: 'The Name of the Wind', author_ids: [ 2 ] },
]
authors = [
	{ id: 1, name: 'Carlo Collodi' },
	{ id: 2, name: 'Patrick Rothfuss' }
]

get '/api/v0/lists' do
	content_type :json
	lists.to_json
end

get '/api/v0/lists/1' do
	content_type :json
	{
		list: lists[0],
		books: books,
		authors: authors
	}.to_json
end

put '/api/v0/books/:id' do
	content_type :json
	json_params = JSON.parse(request.body.read)
	@book = find_book(books, params['id'].to_i)
	@book[:position] = json_params['book']['position'].to_i
	{ book: @book }.to_json
end

def find_book(books, id)
	books.each do |book|
		if book[:id] == id
			return book
		end
	end
	nil
end

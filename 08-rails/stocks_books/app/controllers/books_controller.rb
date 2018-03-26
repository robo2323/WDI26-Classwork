class BooksController < ApplicationController
  def search

  end

  def info
    @book_title = params[:book_title]

    url = "https://www.googleapis.com/books/v1/volumes?q=title:#{@book_title}"
    books_data = HTTParty.get(url) # handle errors?

    @books_info = []

    books_data['items'].each do |item|
      @books_info << item["volumeInfo"]
    end
  end
end
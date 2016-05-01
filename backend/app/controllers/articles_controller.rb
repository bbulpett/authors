class ArticlesController < JSONAPI::ResourceController
	def show
		article = Article.find(params[:id])

		resource = ArticleResource.new(article, nil)

		serializer = JSONAPI::ResourceSerializer.new(ArticleResource)

		render json: serializer.serialize_to_hash(resource)
	end

	def print_article
		render text: params[:body]
		# puts "********* PRINTING ARTICLE ***********"	
	end
end
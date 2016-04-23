JSONAPI.configure do |config|
	# paginators available are :none, :offset, :paged (:none is default)
	config.default_paginator = :paged

	config.default_page_size = 5
	config.maximum_page_size = 20

	# TODOS -> add pagination to Ember frontent (parse JSON meta??)
end
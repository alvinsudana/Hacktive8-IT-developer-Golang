package service

import (
	"assignment3/entity"
	"assignment3/repository"
	"testing"

	"github.com/stretchr/testify/assert"
	"github.com/stretchr/testify/mock"
)

var productRepository = &repository.ProductRepositoryMock{Mock: mock.Mock{}}
var productService = ProductService{Repository: productRepository}

// func TestProductServiceGetOneProductNotFound(t *testing.T) {
// 	productRepository.Mock.On("FindById", "1").Return(nil)

// 	product, err := productService.GetOneProduct("1")

// 	assert.Nil(t, product)
// 	assert.NotNil(t, err)
// 	assert.Equal(t, "product not found", err.Error(), "error response has to be 'product not found'")
// }

func TestProductServiceGetAllProductNotFound(t *testing.T) {

	all := []entity.Product{
		{
			Id:   "1",
			Name: "Alvin",
		},
		{
			Id:   "2",
			Name: "Reza",
		},
	}
	productRepository.Mock.On("FindAll").Return(all)

	product, err := productService.GetAllProduct()

	assert.Nil(t, err)
	assert.NotNil(t, product)
	assert.Equal(t, &all, product, "error response has to be 'product not found'")
}

package repository

import "assignment3/entity"

type ProductRepository interface {
	FindById(id string) *entity.Product
	FindAll() *[]entity.Product
}

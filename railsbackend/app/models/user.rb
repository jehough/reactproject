class User < ApplicationRecord
  has_secure_password
  validates :name, presence: true
  validates :password, presence: true
  validates :name, uniqueness: true
  has_one :cart
  has_many :orders
end

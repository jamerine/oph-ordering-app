class Product < ApplicationRecord

  enum product_type: [:crepes, :egg_specialties, :kids, :omelettes, :pancakes, :specialties, :waffles]

  validates :name, presence: true
  validates :price, presence: true
  validates :short_description, presence: true
  validates :long_description, presence: true

end

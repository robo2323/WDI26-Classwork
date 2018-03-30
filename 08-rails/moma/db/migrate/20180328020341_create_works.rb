class CreateWorks < ActiveRecord::Migration[5.1]
  def change
    create_table :works do |t|
      t.text :title
      t.text :year
      t.text :medium
      t.text :style
      t.text :image
      t.timestamps
    end
  end
end
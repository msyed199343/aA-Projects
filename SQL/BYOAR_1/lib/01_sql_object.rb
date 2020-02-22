require_relative 'db_connection'
require 'active_support/inflector'
# NB: the attr_accessor we wrote in phase 0 is NOT used in the rest
# of this project. It was only a warm up.

class SQLObject
  def self.columns
    return @columns if @columns
    all =  DBConnection.execute2(<<-SQL)
      SELECT
        *
      FROM
         #{self.table_name}
      WHERE
        false
    SQL
    
    all[0].map!{|col| col = :"#{col}"}  
    @columns = all.flatten    
  end

  def self.finalize!
    self.columns.each do |col_name|
      define_method(col_name) do 
         self.attributes[col_name]
      end
      define_method("#{col_name}=") do |value|  
        self.attributes[col_name] = value
      end
    end
  end

  def self.table_name=(table_name)
      @table_name = table_name
  end

  def self.table_name
   @table_name = "#{self}s".downcase
  end

  def self.all
    all =  DBConnection.execute(<<-SQL)
      SELECT
        *
      FROM
        #{self.table_name}
    SQL
    self.parse_all(all)
  end

  def self.parse_all(results)
      results.map do |result|
        self.new(result)
      end
  end

  def self.find(id)
    records =  DBConnection.execute(<<-SQL, id)
      SELECT
        #{table_name}.*
      FROM
        #{table_name}
      where 
      #{table_name}.id = ?
    SQL

    p parse_all(records)[0]
  end

  def initialize(params = {})
    params.each do |name, value|
      name = name.to_sym 
      if self.class.columns.include?(name)
        self.send("#{name}=", value)
      else
        raise "unknown attribute '#{name}'"
      end
    end
  end

  def attributes
    @attributes ||= {}
  end

  def attribute_values
    self.class.columns.map { |attr| self.send(attr) }
  end

  def insert
     columns = self.class.columns.drop(1)
    col_names = columns.map(&:to_s).join(", ")
    question_marks = (["?"] * columns.count).join(", ")

    DBConnection.execute(<<-SQL, *attribute_values.drop(1))
      INSERT INTO
        #{self.class.table_name} (#{col_names})
      VALUES
        (#{question_marks})
    SQL

    self.id = DBConnection.last_insert_row_id
  end

  def update
      set_line = self.class.columns.map{|attr| "#{attr} = ?"}.join(", ")

    DBConnection.execute(<<-SQL, *attribute_values, id)
      UPDATE
        #{self.class.table_name}
      SET
        #{set_line}
      WHERE
        #{self.class.table_name}.id = ?
    SQL
  end

  def save
     if id == nil
        insert 
     else
        update
     end
  end
end

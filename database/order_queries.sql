create or alter PROCEDURE order_queries (
                                          
                                          @product_id  int,
                                          @user_id      int,										  
										  @product_image VARCHAR(max),
										  @product_name VARCHAR(255),
										  @price DECIMAL(10,2),
										  @quantity     int,
                                          @StatementType  NVARCHAR (20) = '')
AS
  BEGIN
      IF @StatementType = 'Insert'
        BEGIN
		SET IDENTITY_INSERT orders OFF
            INSERT INTO orders
                        (
						
                         product_id,
						 user_id,
						 product_image,
						 product_name,
						 price,
						 quantity
                         
                         )
            VALUES     ( 
						
                         @product_id,
                         @user_id,
						 @product_image,
						 @product_name,
						 @price,
						 @quantity)
        END

      IF @StatementType = 'Select'
        BEGIN
            SELECT *
            FROM   orders
        END

      IF @StatementType = 'Update'
        BEGIN
            UPDATE orders
            SET    product_id=@product_id,
					user_id= @user_id,
					product_image=@product_image,
					product_name=@product_name,
					price=@price,
                   quantity = @quantity
                  

            WHERE  user_id = @user_id
        END
      ELSE IF @StatementType = 'Delete'
        BEGIN
            DELETE FROM orders
            WHERE   user_id= @user_id
        END
  END
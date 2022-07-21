create or alter PROCEDURE register_queries (
@user_name VARCHAR(255),
                                          @first_name    VARCHAR(255),
                                          @last_name     VARCHAR(255),
                                          @email        VARCHAR(255),
                                          @password          VARCHAR(255),										  
										  @StatementType  NVARCHAR (20) = '')
AS
  BEGIN
      IF @StatementType = 'Insert'
        BEGIN
            INSERT INTO users
                        (
						user_name,
                         first_name,
                         last_name,
                         email,
						 password						
						 )
            VALUES     (
						@user_name,
                         @first_name,
                         @last_name,
                         @email,
<<<<<<< HEAD
						 @password						
						)
=======
						 @password					
						 )
>>>>>>> origin/nav
        END

      IF @StatementType = 'Select'
        BEGIN
            SELECT *
            FROM   users
        END
        END

      
    
    
    UPDATE STOREDPROCEDURE

    CREATE  OR ALTER PROCEDURE USERUpdate(
@userID int ,  
@user_name VARCHAR(255),
    @email        VARCHAR(255),
    @password          VARCHAR(255)
	  
	  )

AS
BEGIN

    BEGIN
        UPDATE users SET 
		   user_name = @user_name,
	        email=@email,
			password=@password
			      
	       WHERE user_id = @userID
	
    END

    END


    DELETE STORED PROCEDURE

    CREATE  OR ALTER PROCEDURE USERDelete(@user_id int)
AS
BEGIN
  DELETE  FROM users  
		  	    
	       WHERE user_id = @user_id
	
    END


    EMAIL VERIFICATION
    CREATE OR ALTER PROCEDURE CHECK_EMAIL_EXISTS
(@email varchar(255)
)
AS
BEGIN
SELECT * FROM users
WHERE email=@email
END


USERNAME VERIFICATION
CREATE OR ALTER PROCEDURE CHECK_USERNAME_EXISTS
(@user_name varchar(255)
)
AS
BEGIN
SELECT * FROM users
WHERE user_name=@user_name
END

PAGINATION STORED PROCEDURE
create or alter PROCEDURE product_pagination(
@row_count int,
@page_number int)
AS
BEGIN 
SELECT product_image,price from products
ORDER BY product_id
offset @row_count* @page_number rows
fetch next @row_count rows only
END
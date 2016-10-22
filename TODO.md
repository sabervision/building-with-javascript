# API

- Users:
	- Login
	- Registration
	- User profile GET
	- User profile UPDATE

- Questions:
	- Create question
	- Update question
		- Answer question (part of update) ?
	- Delete question

	# DB struct

	- User:
		- email
		- login 
		- password
		- Registration date

	- Question:
		- question text
		- answers:
			- User
			- Answer value
		- creation date
		- expiration date
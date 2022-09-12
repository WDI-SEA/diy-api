# ![](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png) DIY API — Homework

## **Deliverable**:

It's time to make your own API! 

Using what you have learned about Express, Express Routing, RESTful routing, CRUD operations, and Sequelize, use the Sequelize ORM to implement full CRUD functionality on a model (subject of your choosing).

-----

## **Requirements**: 

1. The model you choose to use should have at least three fields, as well an id field. 

*Example:*

| column name     | type |
|:---------------:|:----:|
|id | integer |
|createdAt | timestamp |
|updatedAt | timestamp |
|name | text |
|wodgets | integer |
|quantity | integer |

Recipes:
| column name     | type |
|:---------------:|:----:|
|id | integer |
|createdAt | timestamp |
|updatedAt | timestamp |
|name | string |
|brewing device | string |
|watertemp | integer |
|grinder | string |
|grindsetting | integer |
|groundcoffee | integer |
|description | text |

sequelize model:create --name recipe --attributes name:string,brewingdevice:string,watertemp:integer,grinder:string,grindsetting:integer,groundcoffee:integer,description:text

sequelize model:create --name brewingdevice --attributes name:string,material:string,recipeId:integer

sequelize model:create --name bean --attributes name:string,country:string,region:string,roastlevel:string

sequelize model:create --name recipes_beans --attributes recipeId:integer,beanId:integer


2. Your API should be accessible via five routes: 

*Example:*

| Method | Action | URL | Functionality |
|--------|:------:|:---:|:--------------|
| GET | index | /widgets | list all widgets |
| POST | create | /widgets | add a widget |
| GET | detail/show | /widgets/:id | show one widget |
| PUT | update | /widgets/:id | update one widget |
| DELETE | delete | /widgets/:id | delete one widget |


Custom:
| Method | Action | URL | Functionality |
|--------|:------:|:---:|:--------------|
| GET | index | /recipes | list all recipes |
| POST | create | /recipes | add a recipe |
| GET | detail/show | /recipes/:id | show one recipe |
| PUT | update | /recipes/:id | update one recipe |
| DELETE | delete | /recipes/:id | delete one recipe |

-------

## **Steps to Achieve**

**You will need to:**
1. Fork and clone this repository!
2. Run `npm init` to start your node project. 
3. Create a `.gitignore` and add everything to ignore
4. Create your Express App
5. Sequelize init

**Recommended Workflow:**
1. Stub out your routes, write them `res.send("test")` for initial decleration.
2. Declare your model and migrate.
3. Link your model to your server.
4. Update your routes and make the magic happen!

-------

## Bonus:

1. Add a second model to your API. This model should relate to your first model via a 1:M relationship. Once added, update your GET and POST routes for this second model which allow you do the following with your API: 
    * Show all elements from second model that relate to your element from first model at :id. 
    * Add a new element to your original model that include related elements from this second model at :id.
2. Add PUT and DELETE functionality to your second model
3. Add a third model to your API, that has a M:M relationship to one one the other two models. Support GET and POST functionality.
4. Add UPDATE and DELETE to your functionality to your M:M model.

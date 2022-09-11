# API Planning
## What will I make? -- A database of organisms
---
1:M relationship. 
the kingdoms -> organisms 
need to add more quantifiers to kingdom table or switch order. 

KINGDOM TABLE
| id | kingdom        | traits                                     |
|:--:|:--------------:|:------------------------------------------:|
| 1  | Animals        | Here there be doge                         |
| 2  | Plants         | Green, Filled with anger.                  |
| 3  | Fungi          | What we see is the reproductive organ!     |
| 4  | Protists       | Catch all, for everything outside of the norm.          |
| 5  | Bacteria       | They do a lot, Single Celled, Lack nucleus |
| 6  | Viruses        | Not living, Very cool. Machines of nature  |

ANIMAL TABLE
| id | common_name      | size        | scientific_name      | kingdomId |
|:--:|:----------------:|:-----------:|:--------------------:|:---------:|
| 1  | house cat        | small       | Felis catus          | 1         |
| 2  | T4 bacteriophage | microscopic | Escherichia virus T4 | 6         |
| 3  | turkey           | medium      | Meleagris            | 1         |
| 4  | slime mold       | tiny        | Acrasiomycota        | 4         |
| 5  | E. coli          | microsopic  | Escherichia coli     | 5         |
---
#### BONUS

MODEL ORGANISM TABLE
| id | usage                          | ethical | animalId |
|:--:|:------------------------------:|:-------:|:--------:|
| 1  | bacterial genetics, metabolism | yes     | 5        |



### Model Structure

db name: kingorg_database

sequelize model:create --name kingdom --attributes kingdom_name:string,traits:string,known_species:integer

sequelize model:create --name organism --attributes common_name:string,size:integer,scientific_name:string,kingdomId:integer

sequelize model:create --name kingdoms_organisms --attributes kingdomId:integer,organismId:integer
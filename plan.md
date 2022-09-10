# API Planning
## What will I make? -- A database of organisms
---
1:M relationship. 
the kingdoms -> organisms 
need to add more quantifiers to kingdom table or switch order. 

| id | kingdom  | 
|:--:|:--------:|
| 1  | Animelia |
| 2  | Plantae  |
| 3  | Fungi    |
| 4  | Protista |
| 5  | Monera   |
| 6  | virus    |

| id | common_name      | size        | scientific_name      | kingdomId |
|:--:|:----------------:|:-----------:|:--------------------:|:---------:|
| 1  | house cat        | small       | Felis catus          | 1         |
| 2  | T4 bacteriophage | microscopic | Escherichia virus T4 | 6         |
| 3  | turkey           | medium      | Meleagris            | 1         |
| 3  | slime mold       | tiny        | Acrasiomycota        | 4         |



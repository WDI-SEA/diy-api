# API Planning
## What will I make?
#### A database of organisms
---
1:M relationship. 
the kingdoms -> organisms 
M:M organisms to Model Organism Usages

| id | kingdom  | 
|:--:|:--------:|
| 1  | Animelia |
| 2  | Plantae  |
| 3  | Fungi    |
| 4  | Protista |
| 5  | Monera   |
| 6  | virus    |

| id | organism | size   | can_it_kill_you | kingdomId |
|:--:|:--------:|:------:|:---------------:|:---------:|
| 1  | cat      | small  | yes             | 1         |
| 2  | t4bp     | tiny   | yes             | 6         |
| 3  | turkey   | medium | yes             | 1         |



# REST-Rant: A Food Reviewing Website

rest-Rant is an app in which users can review restauraunts.

## Frameworks and Packages Used
1. Stack:
     -NodeJs
     -Express
     -MongoDB
2. Server Side Rendering
      -JSX  
4. Node Modules Required :
    - **dotenv** : creating relevant environment variables
    - **express-react-views** : express view engine that renders react components on the server
## Routes
| Method | Path | Purpose |
| ------ | ------------------------------------- | ----------------------------- |
| GET | `/` | The home page |
| GET | `/places` | Index page listing all places |
| GET | `/places/new` | New form for a place |
| POST | `/places` | Create a new place |
| GET | `/places/:id` | Show one place in detail (Associated rants, new rant form, delete rant button) |
| GET | `/places/:id/edit` | Edit form for a place |
| PUT | `/places/:id` | Make changes to existing place |
| DELETE | `/places/:id` | Delete a place |
| POST | `/places/:id/rant` | Add rant to a place |
| DELETE | `/places/:id/rant/:rantId` | Delete a rant |


 

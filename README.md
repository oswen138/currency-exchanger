# _Currency Exchanger_

#### _This program converts USD currency to 5 other different currency values. 9/11/2020.

#### By _**Ophelia Swen**_

## Description

_A user can convert USD currency value for 5 other different currency values. This application utilizes the ExchangeRate-API._

_To generate your unique API key visit https://www.exchangerate-api.com/. Fill out the required information to generate your API key. After gaining access to a dashboard that includes your API key, store your API key within the main file directory in a file named ".env". The API should be stored in the variable "API_KEY". Furthermore, the .env file should not be made public or shared to Github._

### Specs
| Spec | Input | Output |
| :-------------     | :------------- | :------------- |
|**Program takes user input and returns currency value from ExchangeRate API** | Input: "15" | "1125.18" |
|**Program returns API error message** | 404 | Location not found |
|**Program returns notification that currency is not found**| Franc | Not a currency |

## Setup/Installation Requirements

* _clone this repository_
* _navigate to the root dir of this project_
* _in terminal do command npm install_
* _generate an api key at https://www.exchangerate-api.com/ _
* _create a .env file in the root dir_
* _in .env file add API_KEY=[your api key]_
* _in terminal do command npm run start_


_To generate an api key to use NASA api's go to api.nasa.gov. Generate a key following their instructions and enter the key into the .env file as listed above._

## Known Bugs

_No Known bugs_

## Support and contact details

_Contact Information: Ophelia Swen: ophelia.swen@gmail.com 

## Technologies Used

_This project uses HTML, CSS, Bootstrap, jQuery, and JavaScript, aided by the Postman tool._

### License

*This software is available with an MIT license*

Copyright (c) 2020 **_Ophelia Swen_**
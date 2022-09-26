Simple CLI node application
Performs CRUD operations from CLI/Bash
Data is persisted in file written to disk 
Demonstrates use of filesystem, chalk, yargs modules etc.

# Node Application Sample Project 
A stripped-down CLI-based application that can be used as a personal tweet-note diary or journal. Persons who love weird and tech-savvy looking diary app can either improve this app or simply use as it is.
 
## How to Run
1. Deploy in node-enabled environment;
2. From the command-line utility present in the environment, navigate to project directory where file 'app.js' is located
3. Use the following commands to run the app: 
	3.1.1. To add new note to diary: 
	3.1.2. Comand: node app.js add --title="[title of note]" --date="[date of event]" --body="[body of note]"       
    3.1.3. Note: '[title]', '[date]' and '[body]' flag are mandatory and must be of data type string;
	
	3.2.1. To retrieve all notes stored in the diary: 
	3.2.2. Comand: node app.js list  
    3.2.3. Note: 'title' flag is mandatory, must be of type string;
	
	3.3.1. To retrive a single note from diary: 
	3.3.2. Comand: node app.js get --title="[title of note]"	
    3.3.3. Note: 'title' flag is mandatory, must be of type string;
	
	3.4.1. To delete/remove a single note from diary: 
	3.4.2. Comand: node app.js remove --title= "[title of note]" 	
    3.4.3. Note: 'title' flag is mandatory, must be of type string;
	
	3.5.1. To update a note in diary: 
	3.5.2. Comand: node app.js update --title="[title of note]"  --ntitle="[new title of Note]" --nbody="[new body of note]" 	
    3.5.3. Note: 'title' flag is mandatory, must be of type string;
	3.5.4. Note: At least one of flags 'ntitle' and 'nbody' flag is mandatory, must be of type string;
	
	In each of the above, replace:
	[title of note] with title of your note e.g., "My trip to Lagos"
	[date of note] with title of your note e.g., "My trip to Lagos"
	[body of note] with body of your note e.g., "..beautiful ride to Lagos on the freshly-minted Lagos-Ibadan train. And Oh! Damola was trouble during the trip"

	
## About the Application 
1. It demonstrates the utility of node and 3rd-party modules including filesystem, chalk, yargs etc.
2. Anyone can improve this app with any other missing components including any bells and whittles;




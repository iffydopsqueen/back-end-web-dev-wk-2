# Week 2 Day 1 Homework

**Table of Contents**

-

Before we start working on each of the tasks, let's set up our DB environment.

Make sure you have _MongoDB_ installed on your computer.

## Setup

1. You can follow this link to make the installation. [Install here](https://zellwk.com/blog/install-mongodb)

2. Start up the MongoDB service using this command:

   ```bash
   brew services start mongodb-community

   # OR

   brew services run mongodb-community
   ```

3. Initialize the ExpressJS application using this command:

   ```bash
   npm init
   ```

   You can leave blank or accept default for all options. Your choice.

   After initializing the project, you should see a `package.json` file created.

4. Next, let's install a `mongodb` driver to our project. This will be added as a dependency so we can access `mongodb` with **NodeJS**.

   Use this command for the installation:

   ```bash
   npm install mongodb -save
   ```

   After installation, you should see a dependency entry in your `package.json` file.

   Now, **_NodeJS_** can now use this module to manipulate MongoDB databases.

## Task 1 - Create a database

Create a database called `statsdb`. Output a message on the terminal.

Follow these steps to perform the task:

### Steps:

## Task 2 - Create a collection

Create a collection called `uscensus`. Output a message on the terminal.

Follow these steps to perform the task:

### Steps:

## Task 3 - Add data to collection

Add the given data (the zip file) to the collection. Output a message on the terminal.

- The `.zip` file that was given is this:

Follow these steps to perform the task:

### Steps:

## Task 4 - Add records to the collection

Add the following records and output a message on the terminal.

City Zip State Income Age
Pacoima 91331 CA 60360 33
Ketchikan 99950 AK 00000 00

Follow these steps to perform the task:

### Steps:

## Task 5 - Search for specific data

Find out the zip code for Corona, NY. Output a message on the terminal.

Follow these steps to perform the task:

### Steps:

## Task 6 - Filter data using the "query" object

Find out the income for all cities in California. Example: `var myquery = { address: /^S/ };`, query all address that starts with **"S"**. Output a message on the terminal.

Follow these steps to perform the task:

### Steps:

## Task 7 - Update a document

Update the income and age for Alaska: `38910` and `46` respectively. Output a message
on the terminal.

Follow these steps to perform the task:

### Steps:

## Task 8 - Sort records by "State"

Sort records in ascending order by state. **Note:** `1` (ascending) `-1` (descending). Output a message on the terminal and also the new sorted list.

Follow these steps to perform the task:

### Steps:

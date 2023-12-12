//interpolação de strings

function createStringConnection(databaseName, user, pass){
    console.log(`connect:DBCONNECT;user=${user};pass=${pass};initial_database=${databaseName}`)
  }
  
  createStringConnection("db_products", "misha", "9876")
  
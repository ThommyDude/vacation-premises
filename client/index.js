// config
const http = axios;
let customers = [];
let owners = [];
let agents = [];
let apartments = [];

$(start);

async function start()
{
    // 1. load some users
    let users = await http.get('data/users');
    // check
    if (users.data)
    {
        // console.log(users);
        for (let user of users.data)
        {
            // 2. make some customer objects
            if (user.type == 'Customer')
            {
                let customer = new Customer(user.firstName, user.lastName, user.email);
                customers.push(customer);
            }

            // 3. make some owner objects
            if (user.type == 'Owner')
            {
                let owner = new Owner(user.firstName, user.lastName, user.email);
                owners.push(owner);
            }

            if (user.type == 'Agent')
            {
                let agent = new Agent(user.firstName, user.lastName, user.email);
                agents.push(agent);
            }
        }
    }
    
    // 4. make some appartment objects
    let aps = await http.get('/data/apartments');
    if(aps.data)
    {
        for(let apartment of aps.data)
        {
            apartments.push(new Apartment(apartment));
        }
    }

    console.log(customers);
    console.log(owners);
    console.log(agents);
    console.log(apartments);

    
    // 5. make a contract for an appartment rental between a customer and an owner

    let contApart = apartments[Math.floor(Math.random()*apartments.length)];
    let contOwn = owners[Math.floor(Math.random()*owners.length)];
    let contCust = customers[Math.floor(Math.random()*customers.length)];
    
    let contract = new Contract(contApart, contCust);
    console.log(contract);

    // 6. add an agent to the contract

    // 7. change the procedure above so that
    //  a) an order is placed by the customer
    //  b) the order is aproved by the owner
    //  c) the contract is issued to the customer and owner by the agent

}
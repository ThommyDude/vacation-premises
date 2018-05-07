class Contract
{
    constructor(apartment, customer, agent)
    {
        this.apartment = apartment;
        
        this.customer = customers.filter(function(c)
        {
            return (c.email == customer);
        })[0];
        
        this.owner = owners.filter(function(o)
        {
            return (o.email == apartment.ownerMail);
        })[0];
        
        this.agent = agents.filter(function(a)
        {
            return (a.email == agent);
        })[0];
    }
}
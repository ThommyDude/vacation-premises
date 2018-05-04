class Contract
{
    constructor(apartment, customer, agent)
    {
        this.apartment = apartment;
        this.customer = customer;
        this.agent = agent;
    
        for(let owner of owners)
        {
            if(this.apartment.ownerMail == owner.email)
            {
                this.owner = owner;
            }
        }
    }
}
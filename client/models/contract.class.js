class Contract
{
    constructor(apartment, customer)
    {
        this.apartment = apartment;
        this.customer = customer;
    
        for(let owner of owners)
        {
            if(this.apartment.ownerMail == owner.email)
            {
                this.owner = owner;
            }
        }
    }
}
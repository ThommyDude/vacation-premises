class Apartment
{
    constructor(props)
    {
        for(let n in props)
        {
            this[n] = props[n];
        }
    }

}
class Apartment
{
    constructor(props)
    {
        for(let n in props)
        {
            // console.log(n);
            // console.log(props[n]);

            this[n] = props[n];
        }
    }

}
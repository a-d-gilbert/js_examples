class Ticket {
    constructor(performer, datePerformed, sector){
        this._performer = performer;
        this._datePerformed = datePerformed;
        this._sector = sector;
    }

    getPerformer(){
        return this._performer;
    }

    getDatePerform(){
        return this._datePerformed;
    }

    getSector(){
        return this._sector;
    }

    setPerformer(performer){
        this._performer = performer;
    }

    setDatePerform(datePerformed){
        this._datePerformed = datePerformed;
    }

    setSector(sector){
        this._sector = sector;
    }
}

var tickets = []; //ticket storage
var dateLowerBound; //lowerbound date
var dateUpperBound; //upperbound date

//parsing data into tickets this is sudo code assuming there is a 
//way to get each piece of data as an object or an array of some sort
for(data in dataSet){
    tickets.push(
        new Ticket(data.parsePerformer
                    , data.parseDatePerformed
                    , data.parseSector)
                );
}

//this would return tickets in a range
tickets = tickets.forEach(function (t) {
    if(t.datePerformed > dateLowerBound && t.datePerformed < dateUpperBound){
        tickets.push(t);
    }
});


//the logic would be that you would parse the incoming data into ticket objects then store those
//so you could easily more easily filter or load them places as a group.
//javascript has a lot of really great array methods built in learning 
//how to use them is a powerful tool.
//the map, reduce, and filter methods are really great to know.
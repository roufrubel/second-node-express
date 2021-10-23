const express = require('express');
const cors = require('cors')

const app = express();
app.use(cors());
app.use(express.json());

const port = 5000;

app.get('/', (req, res) => {
    res.send('Hello from my 2nd node express');
});


const users = [
    { id: 0, name: 'Sabana', email: 'sabana@gmail.com', phone: '01788778877' },
    { id: 1, name: 'Sabnoor', email: 'sabnoor@gmail.com', phone: '01788778879' },
    { id: 2, name: 'Susmita', email: 'susmita@gmail.com', phone: '01788778878' },
    { id: 3, name: 'Suborna', email: 'suborna@gmail.com', phone: '01788778876' },
    { id: 4, name: 'Suchorita', email: 'suchorita@gmail.com', phone: '01788778875' },
    { id: 5, name: 'Suhana', email: 'suhana@gmail.com', phone: '01788778874' }
]

app.get('/users', (req, res) => {
    const search = req.query.search;
    // use query parameter
    if(search){
        const searchResult = users.filter(user => user.name.toLocaleLowerCase().includes(search));
        res.send(searchResult);
    }
else{
    res.send(users)
}
})

// api method
app.post('/users', (req,res) => {
    const newUser = req.body;
    newUser.id = users.length;
    users.push(newUser);
    console.log('hitting the post', req.body)
    res.json(newUser);
})

// dynamic api
app.get('/users/:id', (req, res) => {
    const id = req.params.id
    const user = users[id]
    res.send(user);
})

app.get('/fruits', (req, res) => {
    res.send(['mangoes', 'bananas', 'grapes'])
})

app.listen(port, () => {
    console.log('Listening to port', port);
})
import { Card } from 'semantic-ui-react'

const items = [
    {
        image: '',
        header: 'UAE Free Zone Company',
        description:
            'Your registration agent, will answer all of your questions and help you to reach a conclusion that meets your objectives of investing in the UAE',
        
    },
    {
        image: '',
        header: 'Dubai Local Companies',
        description:
            'The Dubai LLC formation documents are actually articles of organization or a certificate of organization. You can get yours today.',
        
    },
    {
        image: '',
        header: 'Offshore Compamie',
        description:
            'You can register an offshore company and open its bank account in Dubai. Your agent will help you along all the process.',
       
    },
]

const Cards1 = () => <Card.Group items={items} />

export default Cards1;
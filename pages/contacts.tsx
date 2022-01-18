import { useState } from "react"
import { PrismaClient, Prisma, Contact } from  '@prisma/client'
import AddContactForm from "../components/AddContactForm"

const prisma = new PrismaClient();

export async function getServerSideProps() {
    const contacts = await prisma.contact.findMany();
    return {
        props:{
            intialContacts: contacts
        }
    }
}


async function saveContact(contact: Prisma.ContactCreateInput) {
  const response = await fetch('/api/contacts', {
    method: 'POST',
    body: JSON.stringify(contact)
  });

  if (!response.ok) {
    throw new Error(response.statusText);
    
  }
  return await response.json();
}

export default function Contacts({intialContacts}) {

    console.log(intialContacts)

    const [contacts, setContacts] = useState<Contact[]>(intialContacts)

    return <>
    <div style={{width: "90%", margin: "auto"}}>
    <h1>Contacts de la web</h1>
        <div style={{ display: "flex"}}>
            <AddContactForm onSubmit={async (data, e) => {
              try {
                await saveContact(data);
                setContacts([...contacts, data]);
                e.target.reset();
              } catch (err) {
                console.log(err);
              }
            }}
            />
            <div style={{display: "flex", flexDirection: "column"}}>
              {contacts.map((c: Contact, i)=>(
                  <div key={`c-cards-${i}`} style={{display: "flex", border: "1px solid black", width: "100%", marginLeft: "30px"}}>
                      <img src={c.avatar} height={150} width={150}></img>
                      <div style={{paddingLeft: "20px"}}>
                      <h2>{c.firstName} {c.lastName}</h2>
                      <h3>{c.email}</h3>
                      </div>
                      
                  </div>
                  
              ))}
            </div>
        </div>
        <button onClick={()=> console.log(contacts)}> contacts useState</button>
    </div>
    </>

}
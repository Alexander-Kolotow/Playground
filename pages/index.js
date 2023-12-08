import Link from 'next/link';
import ServiceProvider from './ServiceProvider.js';
import styled from 'styled-components';

const serviceProviders = [
    {
      id: 1,
      firstName: 'John',
      lastName: 'Doe',
      skills: 'HTML, CSS, JavaScript',
      needs: 'UI/UX Design',
      email: 'john@example.com',
      phone: '123-456-7890',
    },
    {
      id: 2,
      firstName: 'Jane',
      lastName: 'Smith',
      skills: 'React, Node.js, MongoDB',
      needs: 'API Integration',
      email: 'jane@example.com',
      phone: '987-654-3210',
    },
    {
      id: 3,
      firstName: 'Mike',
      lastName: 'Johnson',
      skills: 'Angular, TypeScript, Firebase',
      needs: 'Performance Optimization',
      email: 'mike@example.com',
      phone: '555-123-4567',
    },
    {
      id: 4,
      firstName: 'Sarah',
      lastName: 'Williams',
      skills: 'Vue.js, SASS, GraphQL',
      needs: 'Responsive Design',
      email: 'sarah@example.com',
      phone: '222-333-4444',
    },
    {
      id: 5,
      firstName: 'David',
      lastName: 'Brown',
      skills: 'Python, Django, PostgreSQL',
      needs: 'Database Architecture',
      email: 'david@example.com',
      phone: '666-999-7777',
    },
  ];


  const Header = styled.header`
  background-color: #f0f0f0;
  padding: 20px;
  text-align: center;
  border-bottom: 1px solid #ccc;
`;

const BackLink = styled.a`
  color: #333;
  text-decoration: none;
  font-weight: bold;
  &:hover {
    opacity: 0.8;
  }
`;

// Styled Components für die Service Cards
const CardWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  padding: 20px;
`;

const Card = styled.div`
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 20px;
  width: 300px;
  transition: box-shadow 0.3s ease;

  &:hover {
    box-shadow: 0 0 40px rgba(0, 0, 0, 0.1);
  }
`;

export default function Test() {
  return (
    <>
      <Header>
        <Link href="/subcategories">
            <h1> &larr; Web Development</h1>
        </Link>
      </Header>

      <main>
        <CardWrapper> 
        {serviceProviders.map(provider => (
          <Card key={provider.id}> 
          <ServiceProvider
            firstName={provider.firstName}
            lastName={provider.lastName}
            skills={provider.skills}
            needs={provider.needs}
            email={provider.email}
            phone={provider.phone}
          />
          </Card>
        ))}
        </CardWrapper>
      </main>
    </>
  );
};
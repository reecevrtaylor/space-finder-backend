import { APIGatewayProxyEvent } from 'aws-lambda';
import { APIGateway } from 'aws-sdk';
import { handler } from '../../services/SpacesTable/Read'

const event: APIGatewayProxyEvent = {
    queryStringParameters: {
        spaceId: 'cda7955b-11b5-4f6f-8bf9-a59135ed40c6'
    }
} as any;


const result = handler(event, {} as any).then((apiResult) => {
    const items = JSON.parse(apiResult.body);
    console.log(123)
});
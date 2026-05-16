import { Client, Account, Databases } from 'appwrite';

const client = new Client();

client
    .setEndpoint('https://fra.cloud.appwrite.io/v1')
    .setProject('6a0708ce00260477d732');

export const account = new Account(client);
export const databases = new Databases(client);

export default client;

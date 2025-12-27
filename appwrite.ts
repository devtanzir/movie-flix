import type { Movie } from './src/services/types';
import { APPWRITE_ENDPOINT, DATABASE_ID, PROJECT_ID, TABLE_ID } from './src/config';
import {Client, Databases, ID, Query} from "appwrite"

const client = new Client()
    .setEndpoint(APPWRITE_ENDPOINT)
    .setProject(PROJECT_ID)

const database = new Databases(client)

export const UpdateSearchCount = async (searchTerm:string, movie:Movie) => {
    try {
        const result = await database.listDocuments(DATABASE_ID, TABLE_ID, [
            Query.equal("searchTerm", searchTerm)
        ])

        if(result.documents.length > 0) {
            const doc = result.documents[0]

            await database.updateDocument(DATABASE_ID, TABLE_ID, doc.$id, {
                count: doc.count + 1
            })
        }else{
            await database.createDocument(DATABASE_ID, TABLE_ID, ID.unique(), {
                searchTerm,
                count: 1,
                movie_id: movie.id,
                poster_url: `https://image.tmdb.org/t/p/w500${movie.poster_path}`
            })
        }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
        throw new Error(error.response?.data?.message || "Failed to fetch movies");
    }
}

export const GetTrendingMovies = async () => {
    try {
        const result = await database.listDocuments(DATABASE_ID, TABLE_ID, [
            Query.limit(5),
            Query.orderDesc("count")
        ])

        return result.documents
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error:any) {
        throw new Error(error.response?.data?.message || "Failed to fetch movies");
    }
}
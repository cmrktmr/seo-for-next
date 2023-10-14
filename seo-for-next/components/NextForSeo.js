import Head from 'next/head';
import {
    generateWebSiteSchema,
    generateArticleSchema,
    generateOrganizationSchema,
    generateBreadcrumbListSchema,
    generateEventSchema,
    generateProductSchema,
    generateReviewSchema,
    generateQAPageSchema,
    generateLocalBusinessSchema,
    generateVideoSchema,
    generatePersonSchema,
    generateBookSchema,
    generateRecipeSchema,
    generateCourseSchema,
    generateMovieSchema,
    generateSportsEventSchema,
    generatePlaceSchema,
    generateJobPostingSchema
} from '../utils/schemaGenerators';

function SeoForNext({ title, description, image, type, schemaTypes = [], schemaDatas = [] }) {
    const schemas = [];

    schemaTypes.forEach((schemaType, index) => {
        let jsonData;

        switch (schemaType) {
            case "website":
                jsonData = generateWebSiteSchema(schemaDatas[index]);
                break;
            case "article":
                jsonData = generateArticleSchema(schemaDatas[index]);
                break;
            case "organization":
                jsonData = generateOrganizationSchema(schemaDatas[index]);
                break;
            case "breadcrumb":
                jsonData = generateBreadcrumbListSchema(schemaDatas[index]);
                break;
            case "event":
                jsonData = generateEventSchema(schemaDatas[index]);
                break;
            case "product":
                jsonData = generateProductSchema(schemaDatas[index]);
                break;
            case "review":
                jsonData = generateReviewSchema(schemaDatas[index]);
                break;
            case "qaPage":
                jsonData = generateQAPageSchema(schemaDatas[index]);
                break;
            case "localBusiness":
                jsonData = generateLocalBusinessSchema(schemaDatas[index]);
                break;
            case "video":
                jsonData = generateVideoSchema(schemaDatas[index]);
                break;
            case "person":
                jsonData = generatePersonSchema(schemaDatas[index]);
                break;
            case "book":
                jsonData = generateBookSchema(schemaDatas[index]);
                break;
            case "recipe":
                jsonData = generateRecipeSchema(schemaDatas[index]);
                break;
            case "course":
                jsonData = generateCourseSchema(schemaDatas[index]);
                break;
            case "movie":
                jsonData = generateMovieSchema(schemaDatas[index]);
                break;
            case "sportsEvent":
                jsonData = generateSportsEventSchema(schemaDatas[index]);
                break;
            case "place":
                jsonData = generatePlaceSchema(schemaDatas[index]);
                break;
            case "jobPosting":
                jsonData = generateJobPostingSchema(schemaDatas[index]);
                break;
            default:
                jsonData = null;
        }

        if (jsonData) {
            schemas.push(jsonData);
        }
    });

    return (
        <Head>
            <title>{title}</title>
            <meta name="description" content={description} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={image} />
            <meta property="og:type" content={type || "website"} />
             {schemas.map((schema, index) => (
                <script key={index} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
            ))}
        </Head>
    );
}

export default SeoForNext;

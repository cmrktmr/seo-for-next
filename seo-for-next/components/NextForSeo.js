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

    const schemaGeneratorMap = {
        website: generateWebSiteSchema,
        article: generateArticleSchema,
        organization: generateOrganizationSchema,
        breadcrumb: generateBreadcrumbListSchema,
        event: generateEventSchema,
        product: generateProductSchema,
        review: generateReviewSchema,
        qaPage: generateQAPageSchema,
        localBusiness: generateLocalBusinessSchema,
        video: generateVideoSchema,
        person: generatePersonSchema,
        book: generateBookSchema,
        recipe: generateRecipeSchema,
        course: generateCourseSchema,
        movie: generateMovieSchema,
        sportsEvent: generateSportsEventSchema,
        place: generatePlaceSchema,
        jobPosting: generateJobPostingSchema,
    };
    
    schemaTypes.forEach((schemaType, index) => {
        const generatorFunction = schemaGeneratorMap[schemaType];
        if (generatorFunction) {
            const jsonData = generatorFunction(schemaDatas[index]);
            if (jsonData) {
                schemas.push(jsonData);
            }
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

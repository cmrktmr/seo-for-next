export function generateWebSiteSchema({ name, url, potentialAction }) {
    const schema = {
        "@context": "https://schema.org",
        "@type": "WebSite",
        name: name,
        url: url
    };

    if (potentialAction) {
        schema.potentialAction = {
            "@type": "SearchAction",
            "target": `${url}/search?q={search_term_string}`,
            "query-input": "required name=search_term_string"
        };
    }

    return schema;
}

export function generateArticleSchema({ headline, image, datePublished, dateModified, author, publisher }) {
    const schema = {
        "@context": "https://schema.org",
        "@type": "Article",
        headline: headline,
        image: [image],
        datePublished: datePublished,
        dateModified: dateModified || datePublished,
        author: {
            "@type": "Person",
            name: author,
            url: author.url
        }
    };

    if (publisher) {
        schema.publisher = {
            "@type": "Organization",
            name: publisher.name,
            logo: {
                "@type": "ImageObject",
                url: publisher.logo
            }
        };
    }

    return schema;
}

export function generateOrganizationSchema({ name, url, logo, contactPoint = [] }) {
    return {
        "@context": "https://schema.org",
        "@type": "Organization",
        name: name,
        url: url,
        logo: logo,
        contactPoint: contactPoint.map(cp => ({
            "@type": "ContactPoint",
            telephone: cp.telephone,
            contactType: cp.contactType,
            areaServed: cp.areaServed || "US",
            availableLanguage: cp.availableLanguage || "en"
        }))
    };
}

export function generateBreadcrumbListSchema(breadcrumbs) {
    const itemListElement = breadcrumbs.map((breadcrumb, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: breadcrumb.name,
        item: breadcrumb.url
    }));

    return {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: itemListElement
    };
}


export function generateEventSchema({ name, startDate, endDate, location, description, imageUrl, offers }) {
    return {
        "@context": "https://schema.org",
        "@type": "Event",
        name,
        startDate,
        endDate,
        location: {
            "@type": "Place",
            name: location.name,
            address: location.address
        },
        description,
        image: imageUrl,
        offers: offers.map(offer => ({
            "@type": "Offer",
            url: offer.url,
            price: offer.price,
            priceCurrency: offer.currency || "USD",
            availability: offer.availability || "https://schema.org/InStock"
        }))
    };
}


export function generateProductSchema({ name, imageUrl, description, price, currency, availability, brand }) {
    return {
        "@context": "https://schema.org",
        "@type": "Product",
        name,
        image: imageUrl,
        description,
        brand: {
            "@type": "Thing",
            name: brand
        },
        offers: {
            "@type": "Offer",
            priceCurrency: currency || "USD",
            price: price,
            availability: availability || "https://schema.org/InStock"
        }
    };
}

export function generateReviewSchema({ author, datePublished, reviewBody, name, ratingValue, bestRating, worstRating, itemReviewed }) {
    return {
        "@context": "https://schema.org",
        "@type": "Review",
        author: {
            "@type": "Person",
            name: author
        },
        datePublished,
        reviewBody,
        name,
        reviewRating: {
            "@type": "Rating",
            ratingValue,
            bestRating: bestRating || 5,
            worstRating: worstRating || 1
        },
        itemReviewed: {
            "@type": "Thing",
            name: itemReviewed
        }
    };
}

export function generateQAPageSchema(questions) {
    const itemList = questions.map(question => ({
        "@type": "Question",
        name: question.questionText,
        acceptedAnswer: {
            "@type": "Answer",
            text: question.answerText
        }
    }));

    return {
        "@context": "https://schema.org",
        "@type": "QAPage",
        mainEntity: itemList
    };
}

export function generateLocalBusinessSchema({ name, address, telephone, openingHours, url, priceRange }) {
    return {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        name,
        address: {
            "@type": "PostalAddress",
            streetAddress: address.streetAddress,
            addressLocality: address.addressLocality,
            addressRegion: address.addressRegion,
            postalCode: address.postalCode,
            addressCountry: address.addressCountry
        },
        telephone,
        openingHours,
        url,
        priceRange
    };
}

export function generateVideoSchema({ name, description, thumbnailUrl, uploadDate, contentUrl, embedUrl, duration }) {
    return {
        "@context": "https://schema.org",
        "@type": "VideoObject",
        name: name,
        description: description,
        thumbnailUrl: thumbnailUrl,
        uploadDate: uploadDate,
        contentUrl: contentUrl,
        embedUrl: embedUrl,
        duration: duration
    };
}

export function generatePersonSchema({ name, birthDate, jobTitle, address, email, telephone, sameAs }) {
    return {
        "@context": "https://schema.org",
        "@type": "Person",
        name: name,
        birthDate: birthDate,
        jobTitle: jobTitle,
        address: {
            "@type": "PostalAddress",
            ...address
        },
        email: email,
        telephone: telephone,
        sameAs: sameAs
    };
}


export function generateBookSchema({ name, author, isbn, numberOfPages, publisher, datePublished, description }) {
    return {
        "@context": "https://schema.org",
        "@type": "Book",
        name: name,
        author: {
            "@type": "Person",
            name: author
        },
        isbn: isbn,
        numberOfPages: numberOfPages,
        publisher: publisher,
        datePublished: datePublished,
        description: description
    };
}


export function generateRecipeSchema({ name, description, image, recipeYield, recipeIngredient, recipeInstructions, totalTime, nutrition }) {
    return {
        "@context": "https://schema.org",
        "@type": "Recipe",
        name: name,
        description: description,
        image: image,
        recipeYield: recipeYield,
        recipeIngredient: recipeIngredient,
        recipeInstructions: recipeInstructions,
        totalTime: totalTime,
        nutrition: {
            "@type": "NutritionInformation",
            ...nutrition
        }
    };
}

export function generateCourseSchema({ name, description, provider }) {
    return {
        "@context": "https://schema.org",
        "@type": "Course",
        name: name,
        description: description,
        provider: {
            "@type": "Organization",
            name: provider
        }
    };
}

export function generateMovieSchema({ name, director, datePublished, description, genre, actor, duration, image }) {
    return {
        "@context": "https://schema.org",
        "@type": "Movie",
        name: name,
        director: {
            "@type": "Person",
            name: director
        },
        datePublished: datePublished,
        description: description,
        genre: genre,
        actor: actor.map(a => ({ "@type": "Person", name: a })),
        duration: duration,
        image: image
    };
}

export function generateSportsEventSchema({ name, startDate, endDate, location, competitor, sport }) {
    return {
        "@context": "https://schema.org",
        "@type": "SportsEvent",
        name: name,
        startDate: startDate,
        endDate: endDate,
        location: {
            "@type": "Place",
            name: location.name,
            address: location.address
        },
        competitor: competitor.map(c => ({ "@type": "SportsTeam", name: c })),
        sport: sport
    };
}

export function generatePlaceSchema({ name, description, address, photo, geo }) {
    return {
        "@context": "https://schema.org",
        "@type": "Place",
        name: name,
        description: description,
        address: {
            "@type": "PostalAddress",
            ...address
        },
        photo: {
            "@type": "ImageObject",
            contentUrl: photo
        },
        geo: {
            "@type": "GeoCoordinates",
            ...geo
        }
    };
}

export function generateJobPostingSchema({ title, description, datePosted, hiringOrganization, jobLocation, baseSalary }) {
    return {
        "@context": "https://schema.org",
        "@type": "JobPosting",
        title: title,
        description: description,
        datePosted: datePosted,
        hiringOrganization: {
            "@type": "Organization",
            name: hiringOrganization.name,
            logo: hiringOrganization.logo
        },
        jobLocation: {
            "@type": "Place",
            address: {
                "@type": "PostalAddress",
                ...jobLocation
            }
        },
        baseSalary: {
            "@type": "MonetaryAmount",
            currency: baseSalary.currency,
            value: {
                "@type": "QuantitativeValue",
                value: baseSalary.value,
                unitText: baseSalary.unitText
            }
        }
    };
}

export interface Category {
    id:number;
    name:string;
}

interface CategoriesData{
    trivia_categories:Array<Category>;
}

export const fetchAllCategories = async () => {
    const endpoint = "https://opentdb.com/api_category.php";
    const data: CategoriesData = await( await fetch(endpoint) ).json();

    const returnData:Category[] = data.trivia_categories;
    return returnData;
}
import { IconName } from "@fortawesome/fontawesome-svg-core"

export type CategoryName = "ALL" | "AMAZING_VIEWS" | "OMG" | "TREEHOUSES" | "BEACH" | "FARMS" | "TINY_HOMES" | "LAKES" | "CONTAINER"
| "CAMPING" | "CASTLE" | "SKIING" | "CAMPERS" | "ARTIC" | "BOAT" | "BED_AND_BREAKFASTS" | "ROOMS" | "EARTH_HOMES" | "TOWER" 
| "CAVES" | "LUXES" | "CHEFS_KITCHEN"

export interface Category {
    icon: IconName,
    displayname: string,
    technicalname: CategoryName,
    activated: boolean
} 
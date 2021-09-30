import { Parsed, Parser } from "typedsv"
import { createReadStream } from "fs"
import "reflect-metadata"

// interface mountainList {
//   id: string;
//   name: string;
//   metres: string;
//   gridref: string;
//   area: string;
//   region: string;
//   county: string;
//   country: string;
//   classifications: string[];
// }

class Mountain {
  @Parsed("Number")
  id = 0

  @Parsed("Name")
  name = ""

  @Parsed("Grid ref")
  gridref = ""

  @Parsed("Metres")
  metres = 0

  @Parsed("Country")
  country = ""

  @Parsed("County")
  county = ""

  @Parsed("Region")
  region = ""

  @Parsed("Area")
  area = ""

  @Parsed({
    header: "Classification",
    // eslint-disable-next-line no-useless-escape
    map: (input: string) => input.replace(/\"/g, "").split(",")
  })
  classifications: string[] = []
}

export async function parseFile(filename: string): Promise<Mountain[]> {
  const parser = new Parser(Mountain)
  return parser.parse(createReadStream(filename), { headers: true }).then(
    (mountains: Mountain[]) => {
      console.log(mountains)
      return mountains.filter(mountain => filterItem(mountain))
    }
  )
}

function filterItem(mountain: Mountain): boolean {
  const allowedCountries = ["E", "ES", "S", "W"]
  const allowedClassifications = ["D", "Sy", "Fel", "B", "W", "WO", "M", "F", "C", "G", "5"];

  if (!allowedCountries.includes(mountain.country)) {
    return false
  }
  const filtered = mountain.classifications.filter(item => allowedClassifications.includes(item))

  return !!filtered.length
}
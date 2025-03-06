"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useState } from "react";
import { properties } from "./data";

export default function PropertySearchPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedType, setSelectedType] = useState("All");
  const [selectedProperties, setSelectedProperties] = useState<number[]>([]);

  const toggleSelection = (property: any) => {
    setSelectedProperties((prev) => {
      return prev.some((p: any) => p.address === property.address)
        ? prev.filter((p: any) => p.address !== property.address)
        : [...prev, property];
    });
  };

  const filteredProperties = properties.filter((property: any) => {
    const matchesSearch = property.address.includes(searchQuery);
    const matchesType =
      selectedType === "All" || property.type === selectedType;
    return matchesSearch && matchesType;
  });

  return (
    <div>
      <div className="flex items-center justify-center bg-light-grey text-black h-[130px]">
        <h2 className="font-bold text-[28px] leading-[31.5px]">
          Property Search
        </h2>
      </div>

      <div className="p-6 max-w-5xl mx-auto space-y-6">
        <div className="flex flex-col gap-y-2">
          <h2 className="font-bold text-[22px] font-manrope leading-[31.5px]">
            Search
          </h2>
          <div className="flex flex-col gap-y-2 md:flex-row md:gap-y-0 space-x-0  md:space-x-2">
            <Input
              placeholder="Address"
              className="w-full h-[44px]"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Button className="h-[44px] ">Search</Button>
          </div>
        </div>

        <Card>
          <CardContent>
            <h2 className="font-semibold text-lg mb-2 mt-2">
              Selected properties
            </h2>
            <Table className="w-full border-collapse border border-gray-300">
              <TableHeader>
                <TableRow className="bg-gray-200">
                  <TableHead className="border p-2 text-black font-bold font-manrope">
                    Address
                  </TableHead>
                  <TableHead className="border p-2 text-black font-bold font-manrope">
                    Postcode
                  </TableHead>
                  <TableHead className="border p-2 text-black font-bold font-manrope">
                    Number of rooms
                  </TableHead>
                  <TableHead className="border p-2 text-black font-bold font-manrope">
                    Floor area (m²)
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {selectedProperties.map((property: any) => (
                  <TableRow key={property.address} className="border">
                    <TableCell className="border p-2 ">
                      {property.address}
                    </TableCell>
                    <TableCell className="border p-2">
                      {property.postcode}
                    </TableCell>
                    <TableCell className="border p-2">
                      {property.rooms}
                    </TableCell>
                    <TableCell className="border p-2">
                      {property.area}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        <div className="flex flex-col gap-y-3">
          <h2 className="font-bold text-[22px] font-manrope leading-[31.5px]">
            Property Types
          </h2>
          <div className="flex flex-col gap-y-2 md:flex-row md:gap-x-2">
            {["All", "Flat", "Terraced house", "Semi-detached"].map((type) => (
              <Button
                key={type}
                className="w-full md:w-max"
                variant={selectedType === type ? "default" : "outline"}
                onClick={() => setSelectedType(type)}
              >
                {type}
              </Button>
            ))}
          </div>
        </div>

        <Card>
          <CardContent>
            <h2 className="font-semibold text-lg mb-2 mt-2">Search results</h2>
            <Table className="w-full border-collapse border border-gray-300">
              <TableHeader>
                <TableRow className="bg-gray-200">
                  <TableHead className="border p-2">✔</TableHead>
                  <TableHead className="border p-2 text-black font-bold font-manrope">
                    Address
                  </TableHead>
                  <TableHead className="border p-2 text-black font-bold font-manrope">
                    Postcode
                  </TableHead>
                  <TableHead className="border p-2 text-black font-bold font-manrope">
                    Property type
                  </TableHead>
                  <TableHead className="border p-2 text-black font-bold font-manrope">
                    Number of rooms
                  </TableHead>
                  <TableHead className="border p-2 text-black font-bold font-manrope">
                    Floor area (m²)
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredProperties.map((property) => (
                  <TableRow key={property.address} className="border">
                    <TableCell className="border p-2 text-center">
                      <Checkbox
                        checked={selectedProperties.some(
                          (p: any) => p.address === property.address
                        )}
                        onCheckedChange={() => toggleSelection(property)}
                      />
                    </TableCell>
                    <TableCell className="border p-2">
                      {property.address}
                    </TableCell>
                    <TableCell className="border p-2">
                      {property.postcode}
                    </TableCell>
                    <TableCell className="border p-2">
                      {property.type}
                    </TableCell>
                    <TableCell className="border p-2">
                      {property.rooms}
                    </TableCell>
                    <TableCell className="border p-2">
                      {property.area}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

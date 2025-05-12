
import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Search, Download, Calendar } from "lucide-react";
import Layout from "@/components/Layout";
import { timetables, Timetable } from "@/data/timetables";

const TimetablePage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedLevel, setSelectedLevel] = useState<string>("all");
  const [selectedSemester, setSelectedSemester] = useState<string>("all");
  
  const filteredTimetables = timetables.filter(timetable => {
    const matchesSearch = timetable.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         timetable.level.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         timetable.semester.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesLevel = selectedLevel === "all" ? true : timetable.level.includes(selectedLevel);
    const matchesSemester = selectedSemester === "all" ? true : timetable.semester === selectedSemester;
    
    return matchesSearch && matchesLevel && matchesSemester;
  });
  
  const levels = Array.from(new Set(timetables.map(t => t.level)));
  const semesters = Array.from(new Set(timetables.map(t => t.semester)));
  
  return (
    <Layout>
      <div className="page-container">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Timetables</h1>
          <p className="text-muted-foreground">
            Download class schedules and academic calendars.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <div className="md:col-span-2">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                placeholder="Search timetables..."
                className="pl-10"
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
          
          <div>
            <Select value={selectedLevel} onValueChange={setSelectedLevel}>
              <SelectTrigger>
                <SelectValue placeholder="Level" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="all">All Levels</SelectItem>
                  {levels.map(level => (
                    <SelectItem key={level} value={level}>{level}</SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          
          <div>
            <Select value={selectedSemester} onValueChange={setSelectedSemester}>
              <SelectTrigger>
                <SelectValue placeholder="Semester" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="all">All Semesters</SelectItem>
                  {semesters.map(semester => (
                    <SelectItem key={semester} value={semester}>{semester}</SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>
        
        <div className="grid grid-cols-1 gap-4">
          {filteredTimetables.length > 0 ? (
            filteredTimetables.map(timetable => (
              <Card key={timetable.id} className="overflow-hidden">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="flex items-start gap-4">
                      <div className="rounded-lg bg-secondary p-3 hidden sm:block">
                        <Calendar className="h-6 w-6" />
                      </div>
                      
                      <div>
                        <h3 className="text-lg font-medium mb-1">{timetable.title}</h3>
                        <div className="flex flex-wrap gap-2 mb-2">
                          <Badge variant="outline">{timetable.level}</Badge>
                          <Badge variant="outline">{timetable.semester}</Badge>
                          <Badge variant="outline">{timetable.academicYear}</Badge>
                        </div>
                        {timetable.description && (
                          <p className="text-muted-foreground text-sm">{timetable.description}</p>
                        )}
                      </div>
                    </div>
                    
                    <div className="flex flex-col md:items-end gap-2">
                      <div className="text-sm text-muted-foreground">
                        <span>Updated: {timetable.updatedDate}</span>
                        <span className="mx-2">•</span>
                        <span>{timetable.fileSize}</span>
                      </div>
                      
                      <Button className="mt-2" asChild>
                        <a href={timetable.fileUrl} download>
                          <Download className="h-4 w-4 mr-2" />
                          Download
                        </a>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))
          ) : (
            <p className="text-center py-8 text-muted-foreground">No timetables match your criteria.</p>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default TimetablePage;

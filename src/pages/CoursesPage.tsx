
import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search } from "lucide-react";
import Layout from "@/components/Layout";
import { courses, Course } from "@/data/courses";

const CoursesPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  
  const filteredCourses = courses.filter(course =>
    course.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    course.code.toLowerCase().includes(searchTerm.toLowerCase()) ||
    course.description.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  const undergraduateCourses = filteredCourses.filter(course => course.level === "Undergraduate");
  const postgraduateCourses = filteredCourses.filter(course => course.level === "Postgraduate");
  
  const renderCourseCard = (course: Course) => (
    <Card key={course.id} className="h-full">
      <CardHeader className="pb-3">
        <div className="flex justify-between items-start">
          <div>
            <Badge variant="outline" className="mb-2">{course.level}</Badge>
            <CardTitle className="flex flex-col">
              <span className="text-sm font-medium text-muted-foreground">{course.code}</span>
              <span>{course.name}</span>
            </CardTitle>
          </div>
          <Badge>{course.credits} Credits</Badge>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground mb-4">{course.description}</p>
        
        {course.prerequisites && course.prerequisites.length > 0 && (
          <div className="mb-3">
            <h4 className="text-sm font-semibold mb-1">Prerequisites</h4>
            <div className="flex flex-wrap gap-1">
              {course.prerequisites.map(prereq => (
                <Badge key={prereq} variant="secondary">{prereq}</Badge>
              ))}
            </div>
          </div>
        )}
        
        {course.professors && course.professors.length > 0 && (
          <div>
            <h4 className="text-sm font-semibold mb-1">Taught by</h4>
            <div className="flex flex-wrap gap-1">
              {course.professors.map(prof => (
                <Badge key={prof} variant="outline">{prof}</Badge>
              ))}
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
  
  return (
    <Layout>
      <div className="page-container">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Courses</h1>
          <p className="text-muted-foreground">
            Browse our undergraduate and postgraduate computer science courses.
          </p>
        </div>
        
        <div className="relative mb-6">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground h-4 w-4" />
          <Input
            placeholder="Search courses by name, code or content"
            className="pl-10"
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
          />
        </div>
        
        <Tabs defaultValue="undergraduate" className="mb-8">
          <TabsList className="mb-4">
            <TabsTrigger value="undergraduate">Undergraduate Courses</TabsTrigger>
            <TabsTrigger value="postgraduate">Postgraduate Courses</TabsTrigger>
          </TabsList>
          
          <TabsContent value="undergraduate">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {undergraduateCourses.length > 0 ? (
                undergraduateCourses.map(renderCourseCard)
              ) : (
                <p className="col-span-full text-center py-8 text-muted-foreground">No undergraduate courses match your search.</p>
              )}
            </div>
          </TabsContent>
          
          <TabsContent value="postgraduate">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {postgraduateCourses.length > 0 ? (
                postgraduateCourses.map(renderCourseCard)
              ) : (
                <p className="col-span-full text-center py-8 text-muted-foreground">No postgraduate courses match your search.</p>
              )}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
};

export default CoursesPage;

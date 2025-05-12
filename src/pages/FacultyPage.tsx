
import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Search } from "lucide-react";
import Layout from "@/components/Layout";
import { faculty, FacultyMember } from "@/data/faculty";

const FacultyPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedFaculty, setSelectedFaculty] = useState<FacultyMember | null>(null);
  
  const filteredFaculty = faculty.filter(member =>
    member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    member.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    member.specializations.some(spec => 
      spec.toLowerCase().includes(searchTerm.toLowerCase())
    )
  );
  
  const handleSelectFaculty = (member: FacultyMember) => {
    setSelectedFaculty(member);
  };
  
  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map(word => word[0])
      .join('')
      .toUpperCase();
  };
  
  return (
    <Layout>
      <div className="page-container">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Faculty Directory</h1>
          <p className="text-muted-foreground">
            Meet our faculty members and research staff.
          </p>
        </div>
        
        <div className="relative mb-8">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground h-4 w-4" />
          <Input
            placeholder="Search faculty by name, title or specialization"
            className="pl-10"
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
          />
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filteredFaculty.length > 0 ? (
            filteredFaculty.map(member => (
              <Card 
                key={member.id} 
                className="cursor-pointer hover:shadow-md transition-shadow"
                onClick={() => handleSelectFaculty(member)}
              >
                <CardContent className="p-6">
                  <div className="flex flex-col items-center text-center">
                    <Avatar className="h-24 w-24 mb-4">
                      <AvatarImage src={member.imageUrl} alt={member.name} />
                      <AvatarFallback className="text-lg bg-csblue text-white">
                        {getInitials(member.name)}
                      </AvatarFallback>
                    </Avatar>
                    <h3 className="text-xl font-medium mb-1">{member.name}</h3>
                    <p className="text-muted-foreground mb-3">{member.title}</p>
                    <div className="flex flex-wrap justify-center gap-1 mt-2">
                      {member.specializations.slice(0, 2).map((spec, index) => (
                        <span
                          key={index}
                          className="bg-secondary text-secondary-foreground px-2 py-0.5 rounded-full text-xs"
                        >
                          {spec}
                        </span>
                      ))}
                      {member.specializations.length > 2 && (
                        <span className="text-muted-foreground text-xs px-2 py-0.5">
                          +{member.specializations.length - 2} more
                        </span>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))
          ) : (
            <p className="col-span-full text-center py-8 text-muted-foreground">No faculty members match your search.</p>
          )}
        </div>
        
        <Dialog open={!!selectedFaculty} onOpenChange={(open) => !open && setSelectedFaculty(null)}>
          <DialogContent className="max-w-3xl">
            {selectedFaculty && (
              <>
                <DialogHeader>
                  <DialogTitle className="text-2xl">{selectedFaculty.name}</DialogTitle>
                  <DialogDescription className="text-base">
                    {selectedFaculty.title}
                  </DialogDescription>
                </DialogHeader>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="md:col-span-1">
                    <div className="flex flex-col items-center">
                      <Avatar className="h-32 w-32 mb-4">
                        <AvatarImage src={selectedFaculty.imageUrl} alt={selectedFaculty.name} />
                        <AvatarFallback className="text-2xl bg-csblue text-white">
                          {getInitials(selectedFaculty.name)}
                        </AvatarFallback>
                      </Avatar>
                      
                      <div className="w-full space-y-3 mt-4">
                        <div>
                          <h4 className="text-sm font-semibold mb-1">Contact</h4>
                          <p className="text-sm">{selectedFaculty.email}</p>
                          <p className="text-sm">{selectedFaculty.phone}</p>
                        </div>
                        
                        <div>
                          <h4 className="text-sm font-semibold mb-1">Office</h4>
                          <p className="text-sm">{selectedFaculty.office}</p>
                        </div>
                        
                        <div>
                          <h4 className="text-sm font-semibold mb-1">Office Hours</h4>
                          <p className="text-sm">{selectedFaculty.officeHours}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="md:col-span-2 space-y-4">
                    <div>
                      <h3 className="font-semibold mb-2">Biography</h3>
                      <p>{selectedFaculty.bio}</p>
                    </div>
                    
                    <div>
                      <h3 className="font-semibold mb-2">Education</h3>
                      <ul className="list-disc pl-5 space-y-1">
                        {selectedFaculty.education.map((edu, index) => (
                          <li key={index}>{edu}</li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="font-semibold mb-2">Research Interests</h3>
                      <div className="flex flex-wrap gap-2">
                        {selectedFaculty.researchInterests.map((interest, index) => (
                          <span
                            key={index}
                            className="bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-sm"
                          >
                            {interest}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="font-semibold mb-2">Specializations</h3>
                      <div className="flex flex-wrap gap-2">
                        {selectedFaculty.specializations.map((spec, index) => (
                          <span
                            key={index}
                            className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm"
                          >
                            {spec}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </Layout>
  );
};

export default FacultyPage;

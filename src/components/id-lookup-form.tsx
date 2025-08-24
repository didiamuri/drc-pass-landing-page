'use client';
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Search, Shield, CheckCircle } from "lucide-react";
import { toast } from "sonner";
import { Translation } from "@/types/translation";

const IdLookupForm = ({dictionary}: { dictionary: Translation }) => {
    const [idNumber, setIdNumber] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const handleSearch = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!idNumber.trim()) {
            toast.error("Veuillez entrer un numéro d'identité valide.");
            return;
        }

        setIsLoading(true);

        // Simulate API call
        setTimeout(() => {
            setIsLoading(false);
            toast.success(`Recherche pour le numéro ${idNumber} terminée.`);
        }, 2000);
    };

    const validateIdNumber = (value: string) => {
        // Basic validation - only allow alphanumeric characters
        return /^[a-zA-Z0-9]*$/.test(value);
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        if (validateIdNumber(value)) {
            setIdNumber(value);
        }
    };

    return (
        <Card className="w-full max-w-md mx-auto shadow-elegant border-0 bg-white">
            <CardHeader className="text-center space-y-4">
                <div className="mx-auto w-16 h-16 bg-primary rounded-full flex items-center justify-center shadow-glow">
                    <Shield className="w-8 h-8 text-white" />
                </div>
                <div className="space-y-2">
                    <CardTitle className="text-2xl font-bold text-foreground">
                        {dictionary.id_lookup.title}
                    </CardTitle>
                    <CardDescription className="text-muted-foreground">
                        {dictionary.id_lookup.description}
                    </CardDescription>
                </div>
            </CardHeader>

            <CardContent>
                <form onSubmit={handleSearch} className="space-y-6">
                    <div className="space-y-2">
                        <Input
                            id="id-number"
                            type="text"
                            placeholder={dictionary.id_lookup.placeholder}
                            value={idNumber}
                            onChange={handleInputChange}
                            className="h-12 text-lg focus:shadow-glow transition-shadow duration-300"
                            disabled={isLoading}
                            maxLength={20}
                        />
                    </div>

                    <Button
                        type="submit"
                        className="w-full h-12 text-lg bg-primary hover:bg-primary-darker text-white"
                        disabled={isLoading || !idNumber.trim()}>
                        {isLoading ? (
                            <>
                                <div className="animate-spin w-5 h-5 border-2 border-white border-t-transparent rounded-full" />
                                {dictionary.id_lookup.button_loading}
                            </>
                        ) : (
                            <>
                                <Search className="w-5 h-5" />
                                {dictionary.id_lookup.button_disabled}
                            </>
                        )}
                    </Button>
                </form>

                <div className="mt-6 p-4 bg-accent rounded-lg border border-border">
                    <div className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                        <div className="text-sm text-muted-foreground">
                            <p className="font-medium text-foreground mb-1">{dictionary.id_lookup.message_title}</p>
                            <p>{dictionary.id_lookup.message_description}</p>
                        </div>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
};

export default IdLookupForm;
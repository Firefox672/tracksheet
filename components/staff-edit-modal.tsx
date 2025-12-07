"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { X } from "lucide-react";

interface StaffEditModalProps {
  section: string;
  studentData: any;
  onClose: () => void;
}

export default function StaffEditModal({
  section,
  studentData,
  onClose,
}: StaffEditModalProps) {
  const [formData, setFormData] = useState(studentData[section] || {});

  const handleSave = () => {
    console.log(`Saving ${section}:`, formData);
    onClose();
  };

  const renderFormFields = () => {
    switch (section) {
      case "profile":
        return (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <div>
              <label
                style={{
                  fontSize: "14px",
                  fontWeight: 500,
                  color: "var(--muted-foreground)",
                  display: "block",
                  marginBottom: "8px",
                }}
              >
                Date of Birth
              </label>
              <Input
                value={formData.dob || ""}
                onChange={(e) =>
                  setFormData({ ...formData, dob: e.target.value })
                }
                style={{
                  backgroundColor: "var(--input)",
                  borderColor: "var(--border)",
                  color: "var(--foreground)",
                  borderRadius: "var(--radius-xl)",
                  padding: "8px 12px",
                  fontSize: "14px",
                }}
              />
            </div>
            <div>
              <label
                style={{
                  fontSize: "14px",
                  fontWeight: 500,
                  color: "var(--muted-foreground)",
                  display: "block",
                  marginBottom: "8px",
                }}
              >
                Address
              </label>
              <Input
                value={formData.address || ""}
                onChange={(e) =>
                  setFormData({ ...formData, address: e.target.value })
                }
                style={{
                  backgroundColor: "var(--input)",
                  borderColor: "var(--border)",
                  color: "var(--foreground)",
                  borderRadius: "var(--radius-xl)",
                  padding: "8px 12px",
                  fontSize: "14px",
                }}
              />
            </div>
            <div>
              <label
                style={{
                  fontSize: "14px",
                  fontWeight: 500,
                  color: "var(--muted-foreground)",
                  display: "block",
                  marginBottom: "8px",
                }}
              >
                Parent Name
              </label>
              <Input
                value={formData.parentName || ""}
                onChange={(e) =>
                  setFormData({ ...formData, parentName: e.target.value })
                }
                style={{
                  backgroundColor: "var(--input)",
                  borderColor: "var(--border)",
                  color: "var(--foreground)",
                  borderRadius: "var(--radius-xl)",
                  padding: "8px 12px",
                  fontSize: "14px",
                }}
              />
            </div>
            <div>
              <label
                style={{
                  fontSize: "14px",
                  fontWeight: 500,
                  color: "var(--muted-foreground)",
                  display: "block",
                  marginBottom: "8px",
                }}
              >
                Parent Phone
              </label>
              <Input
                value={formData.parentPhone || ""}
                onChange={(e) =>
                  setFormData({ ...formData, parentPhone: e.target.value })
                }
                style={{
                  backgroundColor: "var(--input)",
                  borderColor: "var(--border)",
                  color: "var(--foreground)",
                  borderRadius: "var(--radius-xl)",
                  padding: "8px 12px",
                  fontSize: "14px",
                }}
              />
            </div>
          </div>
        );
      case "academic":
        return (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "16px",
              }}
            >
              <div>
                <label
                  style={{
                    fontSize: "14px",
                    fontWeight: 500,
                    color: "var(--muted-foreground)",
                    display: "block",
                    marginBottom: "8px",
                  }}
                >
                  10th Percentage
                </label>
                <Input
                  type="number"
                  value={formData.tenth?.percentage ?? ""}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      tenth: {
                        ...formData.tenth,
                        percentage: parseFloat(e.target.value),
                      },
                    })
                  }
                  style={{
                    backgroundColor: "var(--input)",
                    borderColor: "var(--border)",
                    color: "var(--foreground)",
                    borderRadius: "var(--radius-xl)",
                    padding: "8px 12px",
                    fontSize: "14px",
                  }}
                />
              </div>
              <div>
                <label
                  style={{
                    fontSize: "14px",
                    fontWeight: 500,
                    color: "var(--muted-foreground)",
                    display: "block",
                    marginBottom: "8px",
                  }}
                >
                  Degree CGPA
                </label>
                <Input
                  type="number"
                  value={formData.degree?.cgpa ?? ""}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      degree: {
                        ...formData.degree,
                        cgpa: parseFloat(e.target.value),
                      },
                    })
                  }
                  style={{
                    backgroundColor: "var(--input)",
                    borderColor: "var(--border)",
                    color: "var(--foreground)",
                    borderRadius: "var(--radius-xl)",
                    padding: "8px 12px",
                    fontSize: "14px",
                  }}
                />
              </div>
            </div>
          </div>
        );
      default:
        return (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            {Object.entries(formData).map(([key, value]) => (
              <div key={key}>
                <label
                  style={{
                    fontSize: "14px",
                    fontWeight: 500,
                    color: "var(--muted-foreground)",
                    display: "block",
                    marginBottom: "8px",
                    textTransform: "capitalize",
                  }}
                >
                  {key}
                </label>
                <Input
                  value={String(value)}
                  onChange={(e) =>
                    setFormData({ ...formData, [key]: e.target.value })
                  }
                  style={{
                    backgroundColor: "var(--input)",
                    borderColor: "var(--border)",
                    color: "var(--foreground)",
                    borderRadius: "var(--radius-xl)",
                    padding: "8px 12px",
                    fontSize: "14px",
                  }}
                />
              </div>
            ))}
          </div>
        );
    }
  };

  return (
    <div
      onClick={onClose}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "rgba(15, 23, 42, 0.3)",
        backdropFilter: "blur(6px)",
        zIndex: 9999,
        overflow: "hidden",
      }}
    >
      <Card
        onClick={(e) => e.stopPropagation()}
        style={{
          position: "fixed",
          top: "80px",
          left: "50%",
          transform: "translateX(-50%)",
          width: "100%",
          maxWidth: "448px",
          maxHeight: "calc(100vh - 100px)",
          overflowY: "auto",
          borderRadius: "var(--radius-xl)",
          backgroundColor: "var(--card)",
          borderColor: "var(--border)",
          boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
          zIndex: 10000,
        }}
        className="glass-lg"
      >
        <CardHeader
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            position: "sticky",
            top: 0,
            backgroundColor: "var(--card)",
            zIndex: 10,
            padding: "16px",
            borderBottomColor: "var(--border)",
            borderBottomWidth: "1px",
            backdropFilter: "blur(10px)",
          }}
        >
          <CardTitle
            style={{
              color: "var(--foreground)",
              textTransform: "capitalize",
              fontSize: "16px",
              fontWeight: 600,
            }}
          >
            Edit {section}
          </CardTitle>
          <Button
            variant="ghost"
            size="icon"
            onClick={onClose}
            style={{
              borderRadius: "50%",
              color: "var(--muted-foreground)",
              padding: "8px",
            }}
          >
            <X size={20} />
          </Button>
        </CardHeader>
        <CardContent
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "24px",
            padding: "16px",
          }}
        >
          {renderFormFields()}

          <div
            style={{
              display: "flex",
              gap: "12px",
              marginTop: "16px",
            }}
          >
            <Button
              variant="outline"
              onClick={onClose}
              style={{
                flex: 1,
                borderRadius: "var(--radius-xl)",
                borderColor: "var(--border)",
                backgroundColor: "var(--card)",
                color: "var(--foreground)",
                padding: "10px 16px",
                fontSize: "14px",
              }}
            >
              Cancel
            </Button>
            <Button
              onClick={handleSave}
              style={{
                flex: 1,
                borderRadius: "var(--radius-xl)",
                backgroundColor: "var(--primary)",
                color: "var(--primary-foreground)",
                padding: "10px 16px",
                fontSize: "14px",
              }}
            >
              Save Changes
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

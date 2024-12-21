import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

interface ChatActionsDialogProps {
  isOpen: boolean;
  onClose: () => void;
  onRename: (newTitle: string) => void;
  onDelete: () => void;
  chatTitle: string;
  position?: { x: number; y: number };
}

export const ChatActionsDialog = ({
  isOpen,
  onClose,
  onRename,
  onDelete,
  chatTitle,
  position,
}: ChatActionsDialogProps) => {
  const [newTitle, setNewTitle] = useState(chatTitle);

  const handleRename = () => {
    onRename(newTitle);
    onClose();
  };

  const style = position ? {
    position: 'fixed',
    top: `${position.y}px`,
    left: `${position.x}px`,
  } as React.CSSProperties : {};

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent 
        className="bg-chatgpt-secondary border-chatgpt-border w-[240px] rounded-xl overflow-hidden"
        style={style}
      >
        <DialogHeader>
          <DialogTitle className="text-white text-base">Ações do Chat</DialogTitle>
        </DialogHeader>
        <div className="py-2">
          <Input
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
            placeholder="Novo título"
            className="bg-chatgpt-input text-white border-chatgpt-border rounded-lg text-sm h-8"
          />
        </div>
        <DialogFooter className="flex justify-between items-center gap-2 mt-2">
          <Button
            variant="destructive"
            onClick={onDelete}
            className="bg-red-600 hover:bg-red-700 text-xs px-2 py-1 h-7 rounded-lg"
          >
            Deletar
          </Button>
          <div className="space-x-2">
            <Button 
              variant="outline" 
              onClick={onClose}
              className="text-xs px-2 py-1 h-7 rounded-lg border-chatgpt-border hover:bg-chatgpt-hover"
            >
              Cancelar
            </Button>
            <Button 
              onClick={handleRename}
              className="text-xs px-2 py-1 h-7 rounded-lg bg-chatgpt-hover hover:bg-opacity-80"
            >
              Renomear
            </Button>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
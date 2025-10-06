import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface ProductImageModalProps {
  isOpen: boolean;
  onClose: () => void;
  imageUrl: string;
  productName: string;
}

const ProductImageModal = ({ isOpen, onClose, imageUrl, productName }: ProductImageModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle>{productName}</DialogTitle>
        </DialogHeader>
        <div className="mt-4">
          <img src={imageUrl} alt={productName} className="w-full h-auto rounded-lg object-contain" />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProductImageModal;
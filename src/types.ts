export type RoomType = 'living' | 'kitchen' | 'bedroom' | 'bathroom' | 'corridor' | 'commercial';

export interface RoomDetails {
  id: RoomType;
  title: string;
  subtitle: string;
  description: string;
  imageUrl: string;
  lightTypes: string[];
  tips: string[];
}

export interface ModalState {
  isOpen: boolean;
  type: 'general' | 'collect' | 'room';
  selectionName?: string;
}

export interface Brand {
  name: string;
  logoSvgPaths?: string; // Optional custom vector geometries if needed, or structured layouts
}

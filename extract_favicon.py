
import xml.etree.ElementTree as ET
import re
import os

def process_svg():
    input_path = r'c:\Users\Jalad Bhairao\Github\MNLU\public\images\calstar-logo.svg'
    output_path = r'c:\Users\Jalad Bhairao\Github\MNLU\public\calstar-favicon.svg'

    try:
        tree = ET.parse(input_path)
        root = tree.getroot()
        
        # namespace handling
        ns = {'svg': 'http://www.w3.org/2000/svg'}
        ET.register_namespace('', ns['svg'])

        new_root = ET.Element('svg', xmlns="http://www.w3.org/2000/svg", version="1.1")
        
        paths_to_keep = []
        
        min_x = float('inf')
        min_y = float('inf')
        max_x = float('-inf')
        max_y = float('-inf')

        # Find all path elements
        # Since we registered namespace, we might need to search with it or strip it for simplicity in loop
        for elem in root.iter():
            if elem.tag.endswith('path'):
                transform = elem.get('transform')
                if transform:
                    match = re.search(r'translate\(([\d\.]+)[,\s]+([\d\.]+)\)', transform)
                    if match:
                        x = float(match.group(1))
                        y = float(match.group(2))
                        
                        # Filter for left side (approx < 1200)
                        if x < 1200:
                            paths_to_keep.append(elem)
                            # Update bounding box logic (very rough approximation using translate point)
                            # To be precise we'd need path parsing, but for viewBox we can estimate or use the original height/width logic
                            # Let's try to capture the extent. 
                            # Most paths seem to be around the translation point.
                            # We'll rely on a manual viewBox or try to derive it.
                            # For now, let's just collect the paths.
                else:
                    # Keep paths without transform if they look like they belong (e.g. start at 0,0)
                    # The original background path was 0,0.
                    pass

        # Add kept paths to new root
        for path in paths_to_keep:
            new_root.append(path)

        # Set viewBox. 
        # Based on previous file viewing:
        # Left side seems to range 0 to ~1000 width.
        # Height is 1696.
        # Let's set a standard viewBox and refine if needed.
        new_root.set('viewBox', '200 200 1000 1300') 
        # This is a guess. The paths translate starts around 500-800. 
        # Path 4 is at 655, 246. 
        # Path 16 is at 548, 981.
        # It seems the content is centered around 500-900.
        # Let's try a viewBox that covers this range.
        # min x seen in text is roughly 346 (Path 33).
        # max x seen is ~850.
        # min y seen is ~246.
        # max y seen is ~981.
        # So maybe viewBox="300 200 700 1000" might be close.
        # I'll stick to a safe 0 0 1200 1696 for now to avoid cutting off, or check bounds.
        new_root.set('viewBox', '0 0 1300 1696')

        tree = ET.ElementTree(new_root)
        tree.write(output_path, encoding='UTF-8', xml_declaration=True)
        print(f"Created {output_path} with {len(paths_to_keep)} paths.")

    except Exception as e:
        print(f"Error: {e}")

process_svg()
